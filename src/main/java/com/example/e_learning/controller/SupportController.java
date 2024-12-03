package com.example.e_learning.controller;

import com.example.e_learning.model.Support;
import com.example.e_learning.model.SupportType;
import com.example.e_learning.model.Semester;
import com.example.e_learning.repository.SupportRepository;
import com.example.e_learning.service.SupportService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;
/*
 rachid
 */
/*
 * Classe contrôleur pour gérer les opérations CRUD et filtrages sur les supports.
 * Les supports sont des documents qui peuvent être filtrés par type ou semestre.
 */
@RestController
@RequestMapping("/api/supports")
//@CrossOrigin(origins = "http://localhost:3000") // Permettre les requêtes du front-end (React) si activé
public class SupportController {

    // Injection du service pour gérer la logique métier
    @Autowired
    private SupportService supportService;

    // Injection du repository pour interagir avec la base de données
    @Autowired
    private SupportRepository supportRepository;

    /**
     * Endpoint pour récupérer tous les supports.
     * @return Une liste de tous les supports disponibles dans la base.
     */
    @GetMapping("/getAllSupports")
    public List<Support> getAllSupports() {
        return supportService.getAllSupports();
    }

    /**
     * Endpoint pour récupérer un support spécifique par son ID.
     * @param id L'identifiant unique du support.
     * @return Le support correspondant à l'ID.
     */
    @GetMapping("/getSupportById/{id}")
    public Support getSupportById(@PathVariable String id) {
        return supportService.getSupportById(id);
    }

    /**
     * Endpoint pour sauvegarder un nouveau support.
     * @param support L'objet Support à enregistrer.
     * @return L'objet Support enregistré dans la base.
     */
    @PostMapping("/saveSupport")
    public Support saveSupport(@RequestBody Support support) {
        return supportService.saveSupport(support);
    }

    /**
     * Endpoint pour supprimer un support par son ID.
     * @param id L'identifiant unique du support à supprimer.
     */
    @DeleteMapping("/deleteSupport/{id}")
    public void deleteSupport(@PathVariable String id) {
        supportService.deleteSupport(id);
    }

    /**
     * Endpoint pour récupérer les supports par type.
     * @param type Le type de support (COUR, TP, TD).
     * @return Une liste de supports correspondant au type spécifié.
     */
    @GetMapping("/type/{type}")
    public List<Support> getSupportsByType(@PathVariable SupportType type) {
        return supportService.getSupportsByType(type);
    }

    /**
     * Endpoint pour récupérer les supports par semestre.
     * @param semester Le semestre (S1, S2, S3).
     * @return Une liste de supports correspondant au semestre spécifié.
     */
    @GetMapping("/semester/{semester}")
    public List<Support> getSupportsBySemester(@PathVariable Semester semester) {
        return supportService.getSupportsBySemester(semester);
    }

    /**
     * Endpoint pour récupérer les supports par type et semestre.
     * @param type Le type de support (COUR, TP, TD).
     * @param semester Le semestre (S1, S2, S3).
     * @return Une liste de supports correspondant au type et semestre spécifiés.
     */
    @GetMapping("/type/{type}/semester/{semester}")
    public List<Support> getSupportsByTypeAndSemester(@PathVariable SupportType type, @PathVariable Semester semester) {
        return supportService.getSupportsByTypeAndSemester(type, semester);
    }

    /**
     * Endpoint pour modifier un support existant.
     * @param id L'identifiant unique du support à modifier.
     * @param updatedSupport L'objet Support contenant les nouvelles valeurs.
     * @return Le support modifié ou une réponse Not Found si l'ID est invalide.
     */
    @PutMapping("/updateSupport/{id}")
    public ResponseEntity<Support> updateSupport(
            @PathVariable String id,
            @RequestBody Support updatedSupport) {

        // Vérification de l'existence du support
        Optional<Support> optionalSupport = supportRepository.findById(id);

        if (optionalSupport.isPresent()) {
            Support existingSupport = optionalSupport.get();

            // Mise à jour des champs du support existant
            existingSupport.setNomModule(updatedSupport.getNomModule());
            existingSupport.setSemester(updatedSupport.getSemester());
            existingSupport.setDescription(updatedSupport.getDescription());
            existingSupport.setCodeClassroom(updatedSupport.getCodeClassroom());
            existingSupport.setFichierUrl(updatedSupport.getFichierUrl());
            existingSupport.setType(updatedSupport.getType());

            // Sauvegarde du support modifié
            Support savedSupport = supportRepository.save(existingSupport);
            return ResponseEntity.ok(savedSupport);
        } else {
            // Retourner une réponse 404 si le support n'existe pas
            return ResponseEntity.notFound().build();
        }
    }
}
